marked.setOptions({
    gfm: true,
    breaks: true,
    smartLists: true,
  });

  const input = document.getElementById("markdownInput");
  const output = document.getElementById("htmlOutput");

  // Initial instruction text shown to user
  const instructionText = 
`Welcome to Markdown to HTML Converter!

Type your Markdown here. Examples you can try:

# Heading 1
*Bold text*
Italic text
- List item
[Link](https://example.com)
\Inline code\
> Blockquote

Start typing to replace this message...`;

  // Set instruction text and style it lightly
  input.value = instructionText;
  input.style.color = "#888";

  // Flag to check if user started typing to clear instructions once
  let isUserTyping = false;

  function updatePreview() {
    const markdownText = input.value;

    // If user hasn’t typed anything meaningful yet, clear preview
    if (!isUserTyping || markdownText.trim() === "" || markdownText === instructionText) {
      output.innerHTML = "";
      return;
    }

    // Otherwise parse markdown to HTML
    output.innerHTML = marked.parse(markdownText);
  }

  input.addEventListener("focus", () => {
    if (!isUserTyping) {
      input.value = "";
      input.style.color = "#000";
      isUserTyping = true;
      updatePreview();
    }
  });

  input.addEventListener("input", () => {
    if (!isUserTyping) {
      input.value = "";
      input.style.color = "#000";
      isUserTyping = true;
    }
    updatePreview();
  });

  // Initial preview is empty until user types
  updatePreview();