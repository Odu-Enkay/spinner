let delay = 0;
const spinners = ['|', '/', '-', '\\'];
for (const char of spinners) {
  setTimeout(() => {
    process.stdout.write('\r' + char + "      " );            
  },delay+=300);
} 