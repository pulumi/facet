import { css } from "@microsoft/fast-element";
import { ElementDefinitionContext, FoundationElementDefinition } from "@microsoft/fast-foundation";
import { cardStyles } from "@microsoft/fast-components";
import { elevation } from "../../core";

export const wwwCardStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) => css`
    ${cardStyles(context, definition)}

    :host {
        --elevation: ${elevation.plus3.toString()};
        width: auto;
        height: auto;
    }
`;
