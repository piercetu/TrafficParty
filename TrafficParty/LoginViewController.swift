//
//  LoginViewController.swift
//  TrafficParty
//
//  Created by Pierce Tu on 4/13/19.
//  Copyright © 2019 Pierce. All rights reserved.
//

import UIKit
import Firebase
import FBSDKLoginKit
import Toast_Swift

class LoginViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }
    @IBOutlet weak var logo: UIImageView!
    @IBOutlet weak var intro: UILabel!
    @IBOutlet weak var or: UIImageView!
    @IBOutlet weak var emailLabel: UILabel!
    @IBOutlet weak var passwordLabel: UILabel!
    @IBOutlet weak var emailTextField: UITextField!
    @IBOutlet weak var passwordTextField: UITextField!
    
    
    
    @IBAction func facebookSignIn(_ sender: UIButton) {
        // Custom Facebook Sign In Button.
        FBSDKLoginManager().logIn(withReadPermissions: ["email", "public_profile"], from: self) { (result,error) in
            if error != nil {
                print("Facebook Login Error:", error ?? "NO FB LOGIN ERROR")
                return
            }
//                        print("Facebook access token:", result?.token.tokenString ?? "NO FB TOKEN")
            // authenticate on firebase using fb token
            let accessToken = FBSDKAccessToken.current()
            guard let accessTokenString = accessToken?.tokenString else{return }
            let credential = FacebookAuthProvider.credential(withAccessToken: accessTokenString)
            Auth.auth().signInAndRetrieveData(with: credential) { (user, err) in
                if err != nil{
                    print("FB AUTHENTICATION ERROR: ", err ?? "NO FB AUTHENTICATION ERROR")
                    return
                }
                print("FB USERID: ", user ?? "NO LOGIN USERID")
                self.performSegue(withIdentifier: "loginSegue", sender: nil)
            }
        }
    }
    
//    @IBAction func signIn(_ sender: Any) {
//        
//    }
        

    @IBAction func Register(_ sender: Any) {
        guard let emailAddress = emailTextField.text else { return }
        guard let password = passwordTextField.text else { return }
        
        // Empty text field case.
        if ((emailTextField.text?.isEmpty)! || (passwordTextField.text?.isEmpty)!) {
            self.view.makeToast("Please fill out all fields.")
        }
        
        // Register user onto Firebase.
        Auth.auth().createUser(withEmail: emailAddress, password: password) { user, error in
            if(error == nil && user != nil) {
                self.view.makeToast("Registration Successful!")
                self.performSegue(withIdentifier: "registerCompleteSegue", sender: nil)
            }
            //            else if (error != nil && !(self.emailTextField.text?.isEmpty)! && !(self.passwordTextField?.isEmpty)!){
            //                self.view.makeToast("Registration Error!")
            //                print("Error: \(error!.localizedDescription)")
            //            }
        }
    }

}
