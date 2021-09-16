import * as pulumi from "@pulumi/pulumi";
import { Website } from "@cnunciato/pulumi-jamstack-aws";

const config = new pulumi.Config();
const domainHost = config.require("domainHost");
const domainName = config.require("domainName");
const websitePath = config.require("websitePath");

const site = new Website("website", {
    site: {
        path: websitePath,
    },
    domain: {
        host: domainHost,
        name: domainName,
    },
    protocol: "https",
});

export const {
    bucketName,
    bucketWebsiteURL,
    cdnDomainName,
    cdnURL,
    apiGatewayURL,
    websiteURL,
    websiteLogsBucketName,
} = site;
