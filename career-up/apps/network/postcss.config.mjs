import tailwindcss from "@tailwindcss/postcss";

export default {
  plugins: [
    tailwindcss({
      prefix: "network--",
      theme: {
        extend: {},
      },
    }),
  ],
};
