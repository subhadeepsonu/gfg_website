import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function  AddEvent(){

    return <div>
     <Card className="bg-green-600 min-h-96 w-96 border-black">
            <CardHeader>
                <CardTitle>
                    ADD EVENT
                </CardTitle>
            </CardHeader>
            <CardContent>
            <Label>name</Label>
            <Input></Input>
            <Label>Location</Label>
            <Input></Input>
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
        </div>
    
}