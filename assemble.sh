#!/bin/bash

# just one of many ways to convert pgn sequence to video

mencoder mf://html2video_*.png -mf fps=25:type=png -ovc lavc -lavcopts vcodec=mpeg4:mbd=2:trell -oac copy -o output.avi

