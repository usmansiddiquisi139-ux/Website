// Run with: npx ts-node scripts/download-tool-logos.ts
// This ensures all tool logos are stored locally and independent of external sources

import fs from "fs"
import path from "path"

const toolLogos: Record<string, string> = {
  // Databases
  postgresql:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/PostgreSQL_logo.3colors.120x120.png/120px-PostgreSQL_logo.3colors.120x120.png",
  mongodb: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/200px-MongoDB_Logo.svg.png",
  snowflake:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Snowflake_Logo.svg/200px-Snowflake_Logo.svg.png",
  googlecloud:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/200px-Google_Cloud_logo.svg.png",
  firebase: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Firebase_logo.svg/200px-Firebase_logo.svg.png",
  // ... add all other tools
}

async function downloadLogo(name: string, url: string) {
  try {
    const response = await fetch(url)
    const buffer = await response.arrayBuffer()
    const filename = `${name}.png`
    const filepath = path.join(process.cwd(), "public", "images", "tools", filename)
    fs.writeFileSync(filepath, Buffer.from(buffer))
    console.log(`Downloaded: ${filename}`)
  } catch (error) {
    console.error(`Failed to download ${name}:`, error)
  }
}

async function main() {
  const toolsDir = path.join(process.cwd(), "public", "images", "tools")
  if (!fs.existsSync(toolsDir)) {
    fs.mkdirSync(toolsDir, { recursive: true })
    console.log("Created tools directory")
  }

  for (const [name, url] of Object.entries(toolLogos)) {
    await downloadLogo(name, url)
  }

  console.log("All logos downloaded successfully!")
}

main()
