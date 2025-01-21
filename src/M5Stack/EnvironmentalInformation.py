# 環境
from m5stack import *
from m5stack_ui import *
from uiflow import *
from libs.label_plus import *
import wifiCfg
import urequests
import json

import time
import unit


screen = M5Screen()
screen.clean_screen()
screen.set_screen_bg_color(0xFFFFFF)
env3_2 = unit.get(unit.ENV3, unit.PORTA)


json_object = None
result = None



label1 = M5Label('label1', x=154, y=80, color=0x000, font=FONT_MONT_18, parent=None)
label2 = M5Label('label2', x=154, y=118, color=0x000, font=FONT_MONT_18, parent=None)
label3 = M5Label('label3', x=154, y=161, color=0x000, font=FONT_MONT_18, parent=None)
label4 = M5Label('pressure', x=9, y=80, color=0x000, font=FONT_MONT_18, parent=None)
label5 = M5Label('temperature', x=9, y=120, color=0x000, font=FONT_MONT_18, parent=None)
label6 = M5Label('humidity', x=9, y=161, color=0x000, font=FONT_MONT_18, parent=None)
labelplus0 = M5LabelPlus('result', x=9, y=217, color=0x000, font=FONT_MONT_14, parent=None, url='http://api.m5stack.com/v1', json=None, timer=True, interval=1000, error_msg='Error', error_color=0xff0000)
label0 = M5Label('Wi-Fi', x=12, y=9, color=0x000, font=FONT_MONT_14, parent=None)
touch_button0 = M5Btn(text='POST', x=240, y=91, w=70, h=70, bg_c=0xFFFFFF, text_c=0x000000, font=FONT_MONT_14, parent=None)



def touch_button0_pressed():
  global json_object, result
  label0.set_text(str(wifiCfg.wlan_sta.isconnected()))
  try:
    req = urequests.request(method='POST', url='https://46la4d7sd0.execute-api.ap-northeast-1.amazonaws.com/dev2',json={'url':'','data':((str(((str(((str((env3_2.pressure)) + str('/')))) + str(((str((env3_2.temperature)) + str('/'))))))) + str((env3_2.humidity))))}, headers={})
    json_object = json.loads((req.text))
    result = json_object['result']
    label1.set_text(str(env3_2.pressure))
    label2.set_text(str(env3_2.temperature))
    label3.set_text(str(env3_2.humidity))
    labelplus0.set_text('success')
    gc.collect()
    req.close()
  except:
    labelplus0.set_text('fail to post')
    label1.set_text(str(env3_2.pressure))
    label2.set_text(str(env3_2.temperature))
    label3.set_text(str(env3_2.humidity))
    wait(5)
  pass
touch_button0.pressed(touch_button0_pressed)


wifiCfg.doConnect('KUDOS_IoT', 'KuD0s10T2017')
label0.set_text(str(wifiCfg.wlan_sta.isconnected()))