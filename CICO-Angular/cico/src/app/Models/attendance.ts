import { Time } from "@angular/common";

export class Attendance {
     attendanceId:number | undefined;	
	 studentId:number | undefined;	
	 checkInDate:Date | undefined; 
     checkInTime:Time| undefined;
     checkOutDate:Date| undefined;
     checkOutTime:Time| undefined;
	 checkOutStatus:string| undefined;
	 workingHour:number| undefined;
	 createdDate:Date| undefined; 
	 updatedDate:Date| undefined;
}
