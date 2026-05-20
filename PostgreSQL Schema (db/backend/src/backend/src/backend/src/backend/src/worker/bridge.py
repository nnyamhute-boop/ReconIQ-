# Mtume Bridge Worker: Listens on MQTT/AMQP and POSTs to backend webhook

import os
import time
import requests
# Placeholder: Implement MQTT/AMQP with real client libraries
# import paho.mqtt.client as mqtt

MTUME_WEBHOOK = os.environ.get("MTUME_WEBHOOK", "http://localhost:3001/api/public/mtume/webhook")

def fake_mtume_event():
    return {
        "instanceIdentifier": "test-123",
        "payload": {
            "type": "pain.002",
            "data": {
                "amount": 1000,
                "reference": "EFT4210",
                "date": "2026-05-20"
            }
        }
    }

def main():
    while True:
        time.sleep(10)
        event = fake_mtume_event()
        print("Sending test event:", event)
        requests.post(MTUME_WEBHOOK, json=event)

if __name__ == "__main__":
    main()
