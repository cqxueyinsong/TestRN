//
//  NativeHandler.m
//  TestRN
//
//  Created by EShow on 2018/4/16.
//  Copyright © 2018 EShow. All rights reserved.
//

#import "NativeHandler.h"

@implementation NativeHandler

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(test:(NSString *)param) {
    RCTLogInfo(@"%@", [NSString stringWithFormat:@"执行test事件 parma = %@",param]);
}
@end
