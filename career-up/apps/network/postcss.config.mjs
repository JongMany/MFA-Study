import tailwindcss from "tailwindcss";

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
