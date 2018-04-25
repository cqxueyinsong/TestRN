//
//  FirstViewController.m
//  TestRN
//
//  Created by EShow on 2018/4/12.
//  Copyright © 2018 EShow. All rights reserved.
//

#import "FirstViewController.h"
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>

@interface FirstViewController ()

@end

@implementation FirstViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.navigationController.navigationBar.hidden = YES;
//    if (@available(iOS 11.0, *)) {
//
//    } else {
//        self.automaticallyAdjustsScrollViewInsets = NO;
//        self.edgesForExtendedLayout = UIRectEdgeNone;
//    }
    self.view.backgroundColor = [UIColor whiteColor];
    NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"TestRN"
                         initialProperties : nil
                          launchOptions    : nil];
//    CGFloat height = self.navigationController.navigationBar.frame.size.height + [[UIApplication sharedApplication] statusBarFrame].size.height;
    rootView.frame = CGRectMake(0, 0, UIScreen.mainScreen.bounds.size.width, UIScreen.mainScreen.bounds.size.height);
    [self.view addSubview:rootView];
    
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
