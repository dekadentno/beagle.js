const Beagle = {
    findLinks: function () {
        let results = [];
        document.querySelectorAll('a').forEach((url) => {
            const externalLink = url.host !== window.location.host;
            if (url.href && url.href.includes('://')) {
                results.push({
                    Url: url.href,
                    'Anchor Text': url.textContent,
                    External: externalLink ? 'TRUE' : 'FALSE',
                });
            }
        });
        console.table(results);
    },
    findInjectionPoints() {
        let inputs = document.querySelectorAll('input,textarea,select');
        let forms = document.querySelectorAll('form');
        let links = document.querySelectorAll('a[href]');
        let scripts = document.querySelectorAll('script');

        let table = [];
        let headers = ["Element", "Name/ID", "Type/Method", "Value/URL"];
        table.push(headers);

        for (let input of inputs) {
            table.push([input.tagName, input.name || input.id || '-', input.type || '-', input.value || '-']);
        }

        for (let form of forms) {
            table.push(["FORM", form.name || form.id || '-', form.method || '-', form.action || '-']);
        }

        for (let link of links) {
            table.push(["A", link.textContent.trim() || '-', '-', link.href || '-']);
        }

        console.table(table);
    }
}