
#import "RNCardview.h"

@implementation RNCardview

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE(RNCardview)

RCT_EXTERN_METHOD(increment) {
    NSLog(@"ddddddd");
}
@end
  