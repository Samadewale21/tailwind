const plugin = require("tailwindcss/plugin");

const openVariant = plugin(function ({ addVariant }) {
    addVariant("group-open", ":merge(.group).open &");
    addVariant("peer-open", "& :merge(.peer).open ~");
});

module.exports = {
    // ... your other Tailwind CSS config options
    plugins: [
        openVariant,
        // ... other plugins if you have any
    ],
};