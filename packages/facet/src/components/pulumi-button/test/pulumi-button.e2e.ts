import { newE2EPage } from "@stencil/core/testing";

describe("pulumi-button", () => {
    it("renders", async () => {
        const page = await newE2EPage();
        await page.setContent("<pulumi-button></pulumi-button>");

        const element = await page.find("pulumi-button");
        expect(element).toHaveClass("hydrated");
    });
});
