import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  loginForm!: FormGroup;
  submitted!: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'empid': new FormControl(null, [Validators.required]),
      'empname': new FormControl(null, [Validators.required]),
      'worktype': new FormControl(null, [Validators.required]),
      'date': new FormControl(null, [Validators.required]),
      'time': new FormControl(null, [Validators.required])
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;

        
        if (this.loginForm.invalid) {
            return;
        }

        
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }
  onReset() {
    this.submitted = false;
    this.loginForm.reset();
}



}
