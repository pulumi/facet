import { css } from "@microsoft/fast-element";
import { ElementDefinitionContext, FoundationElementDefinition } from "@microsoft/fast-foundation";
import { tabsStyles } from "@microsoft/fast-components";
import { border } from "../../core";

export const webTabsStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) => css`
    ${tabsStyles(context, definition)}

    .tablist {
        padding: 0;
    }

    .activeIndicator {
        background: none;
        border-bottom: calc(${border.width.toString()} * 1px) solid; /* This toString() business can't be right, but it works. :shrug: */
        border-image-slice: 1;
        border-image-source: linear-gradient(
            90deg,
            #F7BF2A 0%,
            #F26E7E 18.23%,
            #BE5188 38.02%,
            #8A3391 53.65%,
            #805AC3 74.48%,
            #7682F4 100%
        );
    }
`;
