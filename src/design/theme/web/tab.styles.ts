import { css } from "@microsoft/fast-element";
import { ElementDefinitionContext, FoundationElementDefinition } from "@microsoft/fast-foundation";
import { tabStyles } from "@microsoft/fast-components";
import { padding } from "../../core";

export const wwwTabStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) => css`
    ${tabStyles(context, definition)}

    :host {
        padding: .5rem 2rem;
    }

    :host([aria-selected="true"]),
    :host([aria-selected="true"]:hover) {
        background: transparent;
    }
`;
