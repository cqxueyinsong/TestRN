//
//  ViewController.m
//  TestRN
//
//  Created by EShow on 2018/4/24.
//  Copyright © 2018年 EShow. All rights reserved.
//

#import "ViewController.h"
#import "FirstViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
    [btn setBounds:CGRectMake(0, 0, 200, 200)];
    [btn setCenter:self.view.center];
    [self.view addSubview:btn];
    [btn setBackgroundColor:UIColor.grayColor];
    [btn addTarget:self action:@selector(btnClick) forControlEvents:UIControlEventTouchUpInside];
}

- (void)btnClick {
    UINavigationController *nav = [[UINavigationController alloc] initWithRootViewController:FirstViewController.new];
    [self presentViewController:nav animated:YES completion:nil];
}

@end
