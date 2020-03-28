import { WebAPI } from '../api/web-api';
import { autoinject } from 'aurelia-framework';
import { MdToastService, MdModal } from "aurelia-materialize-bridge";

@autoinject
// @inject(WebAPI,MdToastService)
export class NoSelection {
    modal: MdModal;
    selectedId = 0;
    message = "Please Select a Contact.";

    constructor(private api: WebAPI, private toast: MdToastService) {
        this.toast = toast;
    }

    created() {
        // this.api.getContactList().then(contacts => this.contacts = contacts);
    }

    select(contact) {
        this.selectedId = contact.id;
        return true;
    }

    showDefaultToast() {
        this.toast.show("I am a toast!", 4000);
    }
}

