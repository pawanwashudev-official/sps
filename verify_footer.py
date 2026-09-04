import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(
            viewport={'width': 1280, 'height': 800},
            record_video_dir='/home/jules/verification/videos/'
        )

        print("Navigating to http://localhost:3000/")
        await page.goto("http://localhost:3000/", wait_until="networkidle")

        # Scroll to bottom
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await page.wait_for_timeout(1000) # wait for animation

        print("Capturing screenshot of footer...")
        await page.screenshot(path="/home/jules/verification/screenshots/footer_verification.png")

        await browser.close()
        print("Verification script finished.")

if __name__ == "__main__":
    asyncio.run(main())
