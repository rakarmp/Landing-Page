import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "64vpmlf5",
  dataset: "production",
  apiVersion: "v1",
  useCdn: true,
  token:
    "skJbVzAZaiGhZRdJ8UU04M3zlejCRkF1DF0tjJ6vIjMAuDxnmvHGsvB2LSuZ5wXN3beZCMkmMLgKpoYUlX5ebvXkZCzl8rftIyChvTqowUSPXCvhoY3WnnGU6LPi0wyKE7DcYeQwtJpbwqMm0ILHmXSsDZVHblxjHMFoPou0Y31QDlUispJt",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
