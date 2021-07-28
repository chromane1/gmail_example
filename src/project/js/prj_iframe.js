function prj_iframe(app) {

    return {

        // project

        product_image: (data, exec) => {

            exec("common", "post_window_message", window.parent, "get_product_image", data);

        },

        save_image: (data, exec) => {

            exec("common", "post_window_message", window.parent, "save_image", data);

        },

        scrape: (data, exec) => {

            exec("common", "post_window_message", window.parent, "scrape", null);

        },


        collect: (data, exec) => {

            exec("common", "post_window_message", window.parent, "collect", null);

        },

        message: async (data, exec) => {

            var tab_id = await exec("common", "background_exec", "bg", "get_tab_id", "_tab_");
            chrome.storage.local.set({

                message_to_send: "Here is the link to my free e-book ;)"

            }, async function() {

                chrome.tabs.update(tab_id, {

                    url: "https://twitter.com/messages/2429189473-1418135400699334656",

                });

            });

        },

        // common

        init_state: (state, exec) => {

            exec("common", "update_object", state, {

                model: {

                    active_page_name: "main",
                    root_url: "chrome-extension://" + chrome.runtime.id,
                    drawer_item_hash: {

                    },
                    email:''
               

                },

            });

        },

        set_email: async (data, exec) => {

            app.state.model.email = data.email;
        },

        init: async (app, exec) => {


        },

    }

};