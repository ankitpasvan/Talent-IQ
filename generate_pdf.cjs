const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const htmlPath = path.resolve("Talent_IQ_Interview_Preparation_Guide.html");
const pdfPath = path.resolve("Talent_IQ_Interview_Preparation_Guide.pdf");
const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

console.log("HTML Source:", htmlPath);
console.log("Target PDF:", pdfPath);

if (!fs.existsSync(edgePath)) {
  console.error("Microsoft Edge not found at expected path:", edgePath);
  process.exit(1);
}

try {
  const cmd = `"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${pdfPath}" "${htmlPath}"`;
  console.log("Executing Edge headless PDF export...");
  execSync(cmd, { stdio: "inherit" });

  if (fs.existsSync(pdfPath)) {
    const stats = fs.statSync(pdfPath);
    console.log(`✅ Success! Generated PDF (${stats.size} bytes): ${pdfPath}`);
  } else {
    console.error("❌ PDF file was not created.");
    process.exit(1);
  }
} catch (error) {
  console.error("❌ Failed to generate PDF:", error.message);
  process.exit(1);
}
