'use strict';

// Listener para o clique no ícone da extensão
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({
        url: "https://mail.google.com/mail/u/0/#inbox",
        active: true,
        pinned: false
    }, () => {
        chrome.tabs.create({
            url: "https://mail.google.com/mail/u/0/#settings/accounts",
            active: false,
            pinned: true
        });
    });
});

// Configura o alarme ao iniciar o Service Worker
chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create("refreshPopAlarm", { periodInMinutes: 0.5 }); // 30 segundos
});

// Listener para o alarme
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "refreshPopAlarm") {
        chrome.tabs.query({ url: "*://mail.google.com/*" }, (tabs) => {
            tabs.forEach((tab) => {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    func: refreshPop
                });
            });
        });
    }
});

// Função a ser injetada nas abas
function refreshPop() {
    const elements = document.getElementsByClassName("rP sA");
    for (let element of elements) {
        element.click();
    }
    console.log('Atualizando POP3');
}