const Beagle = {
    findLinks: function () {
        console.log("Find links: ");
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
        console.log("Find injection points: ");
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
    },
    extractEmails() {
        console.log("Extract emails: ");
        const bodyText = document.body.innerText;
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
        const emails = bodyText.match(emailRegex) || [];
        const uniqueEmails = [...new Set(emails)];
        console.table(uniqueEmails);
    },
    findHtmlComments() {
        console.log("Find comments: ");
        const comments = [];
        const nodeIterator = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_COMMENT);
        let curNode;
        while (curNode = nodeIterator.nextNode()) {
            comments.push(curNode.nodeValue);
        }
        console.table(comments);
    },
    startAll() {
        this.findLinks();
        this.findInjectionPoints();
        this.extractEmails();
        this.findHtmlComments();
    }
}
