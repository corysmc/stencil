import * as d from '@declarations';
import { BUILD } from '@build-conditionals';
import { doc, plt, win } from '@platform';
import { LISTENER_FLAGS } from '@utils';


export const hostListenerProxy = (hostRef: d.HostRef, methodName: string) => {
  return (ev: Event) => {
    if (BUILD.lazyLoad) {
      if (hostRef.lazyInstance) {
        // instance is ready, let's call it's member method for this event
        return hostRef.lazyInstance[methodName](ev);
      } else {
        hostRef.queuedReceivedHostEvents.push(methodName, ev);
      }
    } else {
      return (hostRef.hostElement as any)[methodName](ev);
    }
  };
};


export const getHostListenerTarget = (elm: Element, flags: number): EventTarget => {
  if (BUILD.hostListenerTargetDocument && flags & LISTENER_FLAGS.TargetDocument) return doc;
  if (BUILD.hostListenerTargetWindow && flags & LISTENER_FLAGS.TargetWindow) return win;
  if (BUILD.hostListenerTargetBody && flags & LISTENER_FLAGS.TargetBody) return doc.body;
  if (BUILD.hostListenerTargetParent && flags & LISTENER_FLAGS.TargetParent) return elm.parentElement;
  return elm;
};


export const hostListenerOpts = (flags: number) =>
  plt.supportsListenerOptions ?
    {
      'passive': (flags & LISTENER_FLAGS.Passive) !== 0,
      'capture': (flags & LISTENER_FLAGS.Capture) !== 0,
    }
  : (flags & LISTENER_FLAGS.Capture) !== 0;