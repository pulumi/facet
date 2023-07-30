import { newSpecPage } from "@stencil/core/testing";
import { PulumiButton } from "../pulumi-button";

describe("pulumi-button", () => {
    it("renders", async () => {
        const page = await newSpecPage({
            components: [PulumiButton],
            html: `<pulumi-button></pulumi-button>`,
        });
        expect(page.root).toEqualHtml(`
            <pulumi-button>
                <mock:shadow-root>
                    <button>
                        <slot></slot>
                    </button>
                </mock:shadow-root>
            </pulumi-button>
        `);
    });
});
