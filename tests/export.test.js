const assert = require("node:assert").strict

const exportGPXPromise = import("../src/components/Export/exportGPX.js")
  .then(({ default: exportGPX }) => exportGPX)

describe("GPX export", function() {
  it("should export 2 entries", async function() {
    const exportGPX = await exportGPXPromise
    const coords = [
      [ 1, 2 ],
    ]

    const expected = `<?xml version="1.0" encoding="UTF-8"?>
      <gpx version="1.1" creator="komoot Test">
        <trk>
          <name>Test Track</name>
          <trkseg>
            <trkpt lat="1" lon="2"><ele>0</ele></trkpt>
          </trkseg>
        </trk>
      </gpx>`.replace(/\s/g, "")
    assert.equal(exportGPX({coords, creator: "komoot Test"}).replace(/\s/g, ""), expected)
  })
})
