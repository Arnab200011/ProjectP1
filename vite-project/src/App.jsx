"use client";

import "./App.css";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";

import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";


import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";

import { ToastAction } from "./components/ui/toast";
import { useToast } from "./components/ui/use-toast";

import { Textarea } from "@/components/ui/textarea";



function App() {
  const { toast } = useToast();
  return (
    <div className="w-full flex justify-center mt-20">
      <Card className="w-[650px]">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-start">
              <Avatar className="mr-4">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardTitle>
          {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-row justify-around">
                <div className="flex flex-col items-start py-8">
                  <Label className="pb-4" htmlFor="name">
                    First Name
                  </Label>
                  <Input id="name" placeholder="First Name" />
                </div>

                <div className="flex flex-col items-start py-8">
                  <Label className="pb-4" htmlFor="lastname">
                    Last Name
                  </Label>
                  <Input id="lastname" placeholder="Last Name" />
                </div>
              </div>

              <div className="flex flex-row justify-around">
                <div className="flex flex-col items-start">
                  <Label className="pb-4" htmlFor="email">
                    Email
                  </Label>
                  <Input id="email" placeholder="Email" />
                </div>

                <div className="flex flex-col items-start">
                  <Label className="pb-4" htmlFor="mobile">
                    Mobile Number
                  </Label>
                  <Input id="mobile" placeholder="Mobile number" />
                </div>
              </div>

              <div className="flex flex-col items-start pb-4 pt-4">
                <label htmlFor="address" className="mb-4">Address</label>
                <Textarea id="address" name="address" placeholder="Address" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="mr-4" variant="outline">
            Cancel
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
              });
            }}
          >
            Confirm
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
