// custom-elements.d.ts
declare namespace JSX {
    interface IntrinsicElements {
        /**
         *  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> allows setting standard HTML attributes on the element
         */
        "pulumi-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            "appearance": string;
        };
    }
}
