export interface Student {
    id: number;
    name: string;
    email?: string;
    enrolledCourseIds?: number[]; // Array of course IDs
    phoneNumber?: string; // Optional field
    registrationDate?: string; // Optional field
}
