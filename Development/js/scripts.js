// قم بإنشاء الدوال التالية

/*
 * greet(name) اسم الدالة
 * - name قد تستقبل وقد لا تستقبل
 * - name إن لم تستقبل اسم أو "Hello" تطبع
 * - name إن استقبلت اسم أو "Hello <name>" تطبع
 */

greet("Aziz");

function greet(name) {
  if (name) {
    console.log("Hello " + name);
  } else {
    console.log("Hello");
  }
}

/*
 * isOdd(n) اسم الدالة
 * - n تستقبل رقم
 * - عدا ذلك false إن كان الرقم فردياً وترجع true ترجع القيمة
 */

console.log(isOdd(4));

function isOdd(n) {
  if (n % 2 == 1) {
    return true;
  } else {
    return false;
  }
}
