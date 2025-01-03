import {
  ChevronRight,
  User,
  KeyRound,
  LogOut,
  Bell,
  Shield,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";

export default function Settings() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-6 md:p-8 space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Settings</h1>

        {/* Account Section */}
        <Card className="overflow-hidden border-0 shadow-sm">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-sm font-medium text-gray-600">Account</h2>
          </div>
          <div>
            <Button
              variant="ghost"
              className="w-full justify-between p-4 h-auto rounded-none hover:bg-gray-50"
              asChild
            >
              <a href="/personal" className="flex items-center">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Personal Information</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </a>
            </Button>
          </div>
        </Card>

        {/* Security Section */}
        <Card className="overflow-hidden border-0 shadow-sm">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-sm font-medium text-gray-600">Security</h2>
          </div>
          <div>
            <Button
              variant="ghost"
              className="w-full justify-between p-4 h-auto rounded-none hover:bg-gray-50"
              asChild
            >
              <a href="/password" className="flex items-center">
                <div className="flex items-center gap-3">
                  <KeyRound className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Change Password</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </a>
            </Button>
          </div>
        </Card>

        {/* Notifications Section */}
        {/* <Card className="overflow-hidden border-0 shadow-sm">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-sm font-medium text-gray-600">Notifications</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Push Notifications
                  </p>
                  <p className="text-sm text-gray-500">
                    Get notified about loan updates
                  </p>
                </div>
              </div>
              <Switch />
            </div>

            <Separator className="bg-gray-200" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Email Notifications
                  </p>
                  <p className="text-sm text-gray-500">
                    Receive email updates about your loans
                  </p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card> */}

        {/* Privacy Section */}
        {/* <Card className="overflow-hidden border-0 shadow-sm">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-sm font-medium text-gray-600">Privacy</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Data Sharing
                  </p>
                  <p className="text-sm text-gray-500">
                    Allow data sharing for better loan offers
                  </p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card> */}

        {/* Session Section */}
        <Card className="overflow-hidden border-0 shadow-sm">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-sm font-medium text-gray-600">Session</h2>
          </div>
          <div>
            <Button
              variant="ghost"
              className="w-full justify-start p-4 h-auto rounded-none text-red-600 hover:bg-red-50 hover:text-red-700"
              onClick={() => {
                // Add logout logic here
                logout();
                navigate("/");
              }}
            >
              <div className="flex items-center gap-3">
                <LogOut className="h-5 w-5" />
                <span>Log out</span>
              </div>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
