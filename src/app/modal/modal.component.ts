// import { Component, OnInit, Inject } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';

// }

// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
//   styleUrls: ['./modal.component.scss']
// })
// export class ModalComponent implements OnInit {
//   name: string;
//   year: string;

//   constructor(public dialog: MatDialog) { }

//   ngOnInit(): void {
//   }

//   openDialog() {
//     console.log("dialog")
//     this.dialog.open(DialogDataExampleDialog, {
//       data: {
//         animal: 'panda'
//       }
//     });
//   }
// }

// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',

//   // templateUrl: './modal-view.component.html',
// })
// export class DialogDataExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

// }
