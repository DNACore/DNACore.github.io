// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const copyButton = document.getElementById('copyButton');
    const effectButtons = document.querySelectorAll('.effect');

    effectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const effect = button.dataset.effect;
            applyEffect(effect);
        });
    });

    copyButton.addEventListener('click', () => {
        const text = outputText.innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert('花漾字已复制到剪贴板');
        });
    });

    function applyEffect(effect) {
        const text = inputText.value;
        let transformedText;

        switch (effect) {
            case 'uppercase':
                transformedText = text.toUpperCase();
                break;
            case 'lowercase':
                transformedText = text.toLowerCase();
                break;
            case 'bold':
                transformedText = text.split('').map(char => char + '\u0332').join('');
                break;
            // 可以添加更多效果处理
            default:
                transformedText = text;
        }

        outputText.innerText = transformedText;
    }
});