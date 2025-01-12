(function () {
    var $rail = $('#WikiaRail');
    if ($rail[0] && !$rail.filter('.loaded, .is-ready')[0]) {
        $rail.on('afterLoad.rail', function () {

function executeCode(code) {
    try {
        const result = new Function(code)();
        console.log(result);
        document.getElementById("inputCode").value = '';
    } catch (error) {
        console.error(error);
    }
}
function createOutput() {
	const header = document.createElement("h1");
	header.setAttribute("id", "ch");
	document.getElementById("p-tb").appendChild(header);
	const output = document.createElement("div");
	output.setAttribute("id", "output");
	document.getElementById("p-tb").appendChild(output);
}


function createCodeInput() {
    const codeInput = document.createElement("textarea");
    codeInput.setAttribute("id", "inputCode");
    document.getElementById("p-tb").appendChild(codeInput);
}

function createExecuteButton() {
    const executeButton = document.createElement("button");
    executeButton.setAttribute("id", "executeButton");
    executeButton.textContent = "Execute";
    document.getElementById("p-tb").appendChild(executeButton);

    executeButton.addEventListener("click", function() {
        const code = document.getElementById("inputCode").value;
        executeCode(code);
    });
}

function clearTextareaButton() {
	const clearTextButton = document.createElement("button");
	clearTextButton.setAttribute("id", "clearTextButton");
	clearTextButton.textContent = "Clear";
	document.getElementById("p-tb").appendChild(clearTextButton);
	clearTextButton.addEventListener("click", function() {
        document.getElementById("inputCode").value = '';
    });
}

function clearTextarea() {
	 document.getElementById("inputCode").value = '';
	}

createOutput();
createCodeInput();
createExecuteButton();
clearTextareaButton();

document.getElementById("ch").innerHTML = "Console";
const oE = document.getElementById("output");
    console.log = function(message) {
      const showoutput = document.createElement("div");
        showoutput.textContent = message;
        oE.appendChild(showoutput);
    };
});
    }
})();

importArticles({ type: 'style', articles: 'u:dev:User:Crazybloy2/common.css' });
