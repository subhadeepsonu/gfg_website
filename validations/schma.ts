import { z } from 'zod';
export const User = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  imgurl: z.string().optional(),
  registered: z.array(z.number().int()).optional(), 
});
export const Member = z.object({
  name: z.string(),
  RG_no: z.string(),
  email: z.string().email(),
  departmentname: z.string(),
  role: z.enum(['lead', 'colead', 'associate_colead', 'member', 'president']),
  imageurl: z.string().optional(),
});
export const Department = z.object({
  name: z.string(),
  members: z.array(Member),
});
export const Event = z.object({
  name: z.string(),
  startDate: z.string(),
  startTime: z.string(),
  endDate: z.string(), 
  endTime: z.string(),
  location: z.string(),
  participants: z.array(z.number().int()).optional(), 
  imgurl: z.string().optional(),
});


