//alert('This profile has been terminated for violating terms of service.\nReason: Pedophilia [TOS Violation]');
//window.location.href = "/";

function closeDialog() {
    window.location.href = "/";
}
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.background = 'rgba(0, 0, 0, 0.5)';
overlay.style.backdropFilter = 'blur(5px)';
overlay.id = 'overlay';
overlay.style.zIndex = 9998
const dialog = document.createElement('div');
dialog.style.position = 'fixed';
dialog.style.top = '50%';
dialog.style.left = '50%';
dialog.style.transform = 'translate(-50%, -50%)';
dialog.style.background = 'white';
dialog.style.padding = '20px';
dialog.style.border = '1px solid #ccc';
dialog.style.borderRadius = '8px';
dialog.style.textAlign = 'center';
dialog.id = 'terminationDialog';
dialog.style.zIndex = 9999
const terminationText = document.createElement('p');
if (typeof terminationReason !== 'undefined' && terminationReason !== null) {
    terminationText.textContent = 'This account has been suspended for violating terms of service.\nReason: ' + terminationReason;
} else {
    terminationText.textContent = 'This account has been suspended for violating terms of service.\nReason: No reason provided.';
}
terminationText.style.color = 'black';
terminationText.style.fontSize = '18pt';
const okButton = document.createElement('button');
okButton.textContent = 'OK';
okButton.style.padding = '10px 20px';
okButton.style.fontSize = '16px';
okButton.style.cursor = 'pointer';
okButton.style.backgroundColor = '#4caf50';
okButton.style.color = 'white';
okButton.style.border = 'none';
okButton.style.borderRadius = '4px';
okButton.onclick = closeDialog;
dialog.appendChild(terminationText);
dialog.appendChild(okButton);
document.body.appendChild(overlay);
document.body.appendChild(dialog);
