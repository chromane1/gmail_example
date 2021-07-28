function prj_cs(app) {

    return {

        // project

        gmail_open: async (exec) => {

            while (true) {
                await exec("util", "wait", 1000);

                let email = document.querySelector('.iw span[data-hovercard-id]').getAttribute('data-hovercard-id');

                var url = "http://example.com?url=" + encodeURIComponent(email);


                exec("common", "post_window_message", app.state.iframe_content_window, "set_email", {

                    email: email

                });
            }


            // await exec("common", "background_exec", "prj_bg", "create_tab", { url });

        },


        check_url: async (exec) => {

            // let location = location.href;

            // while(location.href)
        },

        collect: async (data, exec) => {

            exec("prj_cs", "gmail_open")

        },

        // common

        iframe_ready: (data, exec) => {

            exec("prj_cs", "gmail_open")

            app.state.iframe_content_window = data.event.source;


        },

        init_state: (state, exec) => {


        },

        init: async (app, exec) => {

            var tab_id = await exec("common", "background_exec", "bg", "get_tab_id", "_tab_");
            var storage = await exec("chrome", "call", "storage.local.get", ["tab_id_arr", "message_to_send"]);

            if (storage.tab_id_arr && storage.tab_id_arr.indexOf(tab_id) > -1) {

                var amazon_product_result = exec("scraper", 'doc_to_amazon_product_result', document);

                chrome.runtime.sendMessage({

                    name: "amazon_product_result_available",
                    data: {
                        amazon_product_result
                    }

                });

            };

            if (storage.message_to_send) {

                while (document.querySelector("[contenteditable]") === null) {

                    await exec("util", "wait", 200);

                };

                var contenteditable = document.querySelector("[contenteditable]");

                var br = contenteditable.querySelector("br");
                br.parentElement.innerHTML = `<span>${ storage.message_to_send }</span>`;


                contenteditable.focus()
                contenteditable.dispatchEvent(new Event("focus", { bubbles: true }))

                await exec("util", "wait", 100);

                contenteditable.dispatchEvent(new Event("input", { bubbles: true }))
                contenteditable.dispatchEvent(new Event("change", { bubbles: true }))

                await exec("util", "wait", 100);




                document.querySelector(`[aria-label="Send"]`).click();

            };

        },

    }

};