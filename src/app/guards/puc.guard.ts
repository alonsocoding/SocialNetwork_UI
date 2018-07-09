/*
    Class Name: PreventUnsavedChanges
    Implements: CanDeactivate
    Description: This class allows to notify if the user is going to access a new root
    without saving any changes to the original data wich means the data will be lost
*/

import { MemberEditComponent } from "../member/member-edit/member-edit.component";
import { CanDeactivate } from "../../../node_modules/@angular/router";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate <MemberEditComponent> {
    // Method allows to deactive an access to another root
    canDeactivate(component: MemberEditComponent) {
        // If the form have been changed
        if(component.editForm.dirty) { 
            return confirm('Are you sure you want to continue? Any unsaved change will be lost');
        }
        return true;
    }
}