import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Adddepartment(){
    return <div className=" felx flex-col justify-around items-center">
    <Card className="bg-green-600 w-96 h-auto border-black flex justify-between  flex-col">
        <CardHeader>
            <CardTitle className="text-white flex justify-center">
            Department
            </CardTitle>
        </CardHeader>
        <CardContent>
        <Label className="text-white py-4">
        Name
        </Label>
        <Input type="text" placeholder="name"></Input>
   
        
        </CardContent>
        <CardFooter className="flex justify-center">
            <Button variant={"outline"}>
                Add department
            </Button>
        </CardFooter>
    </Card>
    
    </div>
}