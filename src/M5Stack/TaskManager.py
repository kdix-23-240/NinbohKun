from m5stack import *
from m5stack_ui import *
from uiflow import *
from libs.label_plus import *
import wifiCfg
import urequests
import json
#import time

screen = M5Screen()
screen.clean_screen()
screen.set_screen_bg_color(0xFFFFFF)


timeList = None
MorningTaskList = None
PaytimeTaskList = None
NightTaskList = None
timeMap = None
json_object = None
result = None


#時間帯表示用
labelplus0 = M5LabelPlus('labelplus0', x=66, y=44, color=0x000, font=FONT_MONT_30, parent=None, url='http://api.m5stack.com/v1', json=None, timer=True, interval=1000, error_msg='Error', error_color=0xff0000)
#タスク表示用
labelplus1 = M5LabelPlus('labelplus1', x=67, y=88, color=0x000, font=FONT_MONT_30, parent=None, url='http://api.m5stack.com/v1', json=None, timer=True, interval=1000, error_msg='Error', error_color=0xff0000)
#コメント用
labelplus2 = M5LabelPlus('labelplus2', x=66, y=137, color=0x000, font=FONT_MONT_30, parent=None, url='http://api.m5stack.com/v1', json=None, timer=True, interval=1000, error_msg='Error', error_color=0xff0000)
#タスク完了割合
labelplus3 = M5LabelPlus('labelplus3', x=199, y=45, color=0x000, font=FONT_MONT_30, parent=None, url='http://api.m5stack.com/v1', json=None, timer=True, interval=1000, error_msg='Error', error_color=0xff0000)

labelplus4 = M5LabelPlus('result', x=9, y=217, color=0x000, font=FONT_MONT_14, parent=None, url='http://api.m5stack.com/v1', json=None, timer=True, interval=1000, error_msg='Error', error_color=0xff0000)

#label0 = M5Label('Wi-Fi', x=12, y=9, color=0x000, font=FONT_MONT_14, parent=None)
#タスクの完了チェック
touch_button0 = M5Btn(text='Check', x=215, y=156, w=70, h=70, bg_c=0xFFFFFF, text_c=0x000000, font=FONT_MONT_14, parent=None)
#送信用ボタン
touch_button1 = M5Btn(text='POST', x=80, y=180, w=40, h=40, bg_c=0xFFFFFF, text_c=0x000000, font=FONT_MONT_14, parent=None)

timeNum = 0
taskNum = 0
completeNumMorning = 0
completeNumDaytime = 0
completeNumNight = 0

wifiCfg.doConnect('KUDOS_IoT', 'KuD0s10T2017')
timeList = ['mornig', 'daytime', 'night']
MorningTaskList = [['wake up',False], ['drink water',False], ['have a breakfast',False], ['brush your teeth',False], ['take a walk',False], completeNumMorning]
DaytimeTaskList = [['have a lunch',False], ['brush your teeth',False], ['feed your pets',False], completeNumDaytime]
NightTaskList = [['have a dinner',False], ['take a bath',False], ['healthcheck',False], ['brush your teeth',False], completeNumNight]
timeMap = {'mornig': MorningTaskList, 'daytime': DaytimeTaskList, 'night': NightTaskList}

#label0.set_text(str(wifiCfg.wlan_sta.isconnected()))
labelplus0.set_text(timeList[0])
labelplus1.set_text('choose your task')
labelplus2.set_text('no command')
labelplus3.set_text('none rate')
#wifiCfg.doConnect('KUDOS_IoT', 'KuD0s10T2017')


def touch_button0_pressed():
  # global params
  if(timeMap[timeList[timeNum]][taskNum][1]):
    timeMap[timeList[timeNum]][taskNum][1] = False
    timeMap[timeList[timeNum]][-1] -= 1
  elif not (timeMap[timeList[timeNum]][taskNum][1]):
    timeMap[timeList[timeNum]][taskNum][1] = True
    timeMap[timeList[timeNum]][-1] += 1
  # timeMap[timeList[timeNum]][taskNum][1] = True
  pass
touch_button0.pressed(touch_button0_pressed)

#送信ボタンを押した時の処理
def touch_button1_pressed():
  global result, json_object
  #label0.set_text(str(wifiCfg.wlan_sta.isconnected()))
  try:
    req = urequests.request(method='POST', url='https://46la4d7sd0.execute-api.ap-northeast-1.amazonaws.com/dev2',json={'url':'https://script.google.com/macros/s/AKfycbx7pfm7sCvICL_jrj7EBrbYFOEI7Gmg5LnaVpC7AQZzx46l2WwvV0vS_xYwqM-pZ7bNSw/exec','data':str(timeMap[timeList[timeNum]][-1] / ((len(timeMap[timeList[timeNum]]))-1) * 100)}, headers={})
    json_object = json.loads((req.text))
    result = json_object['result']
    labelplus4.set_text(str(result))
    #heart_rate.set_text('abc')
    gc.collect()
    req.close()
  except:
    labelplus4.set_text('huh')
    wait(5)
  pass
touch_button1.pressed(touch_button1_pressed)


while True:
  labelplus0.set_text(str(timeList[timeNum]))
  labelplus1.set_text(str(timeMap[timeList[timeNum]][taskNum][0]))
  labelplus3.set_text(str(0))

  # labelplus3.set_text(str(timeMap[timeList[timeNum]][len(timeMap[timeList[timeNum]])-1]))
    # 時間帯を決定するループ
  while True:
    labelplus0.set_text(str(timeList[timeNum]))
    if btnC.wasPressed():
      if timeNum < len(timeList) - 1:
        timeNum += 1
    elif btnA.wasPressed():
      if timeNum > 0:
        timeNum -= 1
    elif btnB.isPressed():
      break
    
  wait(1)

    # タスクを決定するループ
  while True:
    labelplus1.set_text(str(timeMap[timeList[timeNum]][taskNum][0]))
    
    labelplus3.set_text(str(timeMap[timeList[timeNum]][-1] / ((len(timeMap[timeList[timeNum]]))-1) * 100))
    
    if(timeMap[timeList[timeNum]][taskNum][1]):
      labelplus2.set_text('had done')
    elif not (timeMap[timeList[timeNum]][taskNum][1]):
      labelplus2.set_text('had not done')
    if btnA.wasPressed():
      if taskNum > 0:
        taskNum -= 1
      else:
        taskNum = 0
    elif btnC.wasPressed():
      if taskNum < len(timeMap[timeList[timeNum]]) - 2:
        taskNum += 1
      else:
        taskNum = len(timeMap[timeList[timeNum]]) - 2
    elif btnB.wasPressed():
      timeNum = 0
      taskNum = 0
      labelplus0.set_text(timeList[taskNum])
      break