# hms_itk

This is a repo for the HMS project

# Models
User model: This table will storage all the general information about the users regardless if is a patient,doctor or admin
User{ \
id: number, //PK \
first_name: string, \
last_name: string, \
birthday: string, \
age: number, \
gender: string, (Male,Female, Other) \
email: string, \
contactNumber: number, \
} 

User model: This table will storage all the general information about the users regardless if is a patient,doctor or admin \
User{
id: number, //PK
first_name: string,
last_name: string,
birthday: string,
age: number,
gender: string, (Male,Female, Other)
email: string,
contactNumber: number,
}

Role model: This table will storage the roles that the user can have. In this case will be 3 roles patient, doctor or admin \
Role{ \
id: number, //PK \
name: string, (Patient,Doctor,Admin) \
} \

UserRole model: This table will assign the users with their role \
UserRole{ \
userId: number, FK -> User.id \
roleId: number, FK -> Role.id \
} \

PatientProfile model: This table assign aditional information to the users that have the patient role \
PatientProfile{ \
id: number, //PK \
height: number, \
weight: number, \
bloodType: string, \
allergies: string, \
emergencyContactName: string, \
emergencyContactNumber: number, \
userId: number, // FK -> User.id \
} \

DoctorProfile model: This table assign aditional information to the users that have the doctor role \
DoctorProfile{ \
id: number, //PK \
specialty: string, \
professionalLicenseNumber: number \
available: boolean, \
userId: number, // FK -> User.id \
} \

AdminProfile model: This table assign aditional information to the users that have the admin role \
AdminProfile{ \
id: number, //PK \
available: boolean, \
userId: number, // FK -> User.id \
} \

//Appointment model: This table storage the appointments \
Appointment{ \
id: number, //PK \
patientId: number, //FK ->PatientProfile.id \
doctorId: number, //FK -> DoctorProfile.id \
date: string, \
hour: number, \
} \
