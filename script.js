document.getElementById('deleteButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
    var textWithoutSpaces = inputText.replace(/\s+/g, '');
    document.getElementById('inputText').value = textWithoutSpaces;
});

document.getElementById('copyButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputText');
    inputText.select();
    inputText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Text copied to clipboard");
});