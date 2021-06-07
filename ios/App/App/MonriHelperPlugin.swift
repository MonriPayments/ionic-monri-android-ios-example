//
//  MonriHelperrPlugin.swift
//  App
//
//  Created by Adnan Omerovic on 7. 6. 2021..
//

import Foundation
import Capacitor

@objc(MonriHelperPlugin)
public class MonriHelperPlugin: CAPPlugin {
    private let implementation = MonriHelper()


    @objc func createPaymentSession(_ call: CAPPluginCall) {
        implementation.createPaymentSessionHelperFunc{ response in
            guard let response = response else {
                return
            }
            call.resolve([
                "client_secret": response.clientSecret
            ])
        }
    }
}
