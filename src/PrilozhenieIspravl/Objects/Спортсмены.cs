﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.PrilozhenieIspravl
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Спортсмены.
    /// </summary>
    // *** Start programmer edit section *** (Спортсмены CustomAttributes)

    // *** End programmer edit section *** (Спортсмены CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СпортсменыE", new string[] {
            "ФИО as \'ФИО\'",
            "ДатаРождения as \'Дата рождения\'",
            "Телефон as \'Телефон\'"})]
    [View("СпортсменыL", new string[] {
            "ФИО as \'ФИО\'",
            "ДатаРождения as \'Дата рождения\'",
            "Телефон as \'Телефон\'"})]
    public class Спортсмены : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private System.DateTime fДатаРождения;
        
        private string fТелефон;
        
        // *** Start programmer edit section *** (Спортсмены CustomMembers)

        // *** End programmer edit section *** (Спортсмены CustomMembers)

        
        /// <summary>
        /// ДатаРождения.
        /// </summary>
        // *** Start programmer edit section *** (Спортсмены.ДатаРождения CustomAttributes)

        // *** End programmer edit section *** (Спортсмены.ДатаРождения CustomAttributes)
        public virtual System.DateTime ДатаРождения
        {
            get
            {
                // *** Start programmer edit section *** (Спортсмены.ДатаРождения Get start)

                // *** End programmer edit section *** (Спортсмены.ДатаРождения Get start)
                System.DateTime result = this.fДатаРождения;
                // *** Start programmer edit section *** (Спортсмены.ДатаРождения Get end)

                // *** End programmer edit section *** (Спортсмены.ДатаРождения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Спортсмены.ДатаРождения Set start)

                // *** End programmer edit section *** (Спортсмены.ДатаРождения Set start)
                this.fДатаРождения = value;
                // *** Start programmer edit section *** (Спортсмены.ДатаРождения Set end)

                // *** End programmer edit section *** (Спортсмены.ДатаРождения Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (Спортсмены.Телефон CustomAttributes)

        // *** End programmer edit section *** (Спортсмены.Телефон CustomAttributes)
        [StrLen(255)]
        public virtual string Телефон
        {
            get
            {
                // *** Start programmer edit section *** (Спортсмены.Телефон Get start)

                // *** End programmer edit section *** (Спортсмены.Телефон Get start)
                string result = this.fТелефон;
                // *** Start programmer edit section *** (Спортсмены.Телефон Get end)

                // *** End programmer edit section *** (Спортсмены.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Спортсмены.Телефон Set start)

                // *** End programmer edit section *** (Спортсмены.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (Спортсмены.Телефон Set end)

                // *** End programmer edit section *** (Спортсмены.Телефон Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Спортсмены.ФИО CustomAttributes)

        // *** End programmer edit section *** (Спортсмены.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Спортсмены.ФИО Get start)

                // *** End programmer edit section *** (Спортсмены.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Спортсмены.ФИО Get end)

                // *** End programmer edit section *** (Спортсмены.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Спортсмены.ФИО Set start)

                // *** End programmer edit section *** (Спортсмены.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Спортсмены.ФИО Set end)

                // *** End programmer edit section *** (Спортсмены.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СпортсменыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СпортсменыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СпортсменыE", typeof(IIS.PrilozhenieIspravl.Спортсмены));
                }
            }
            
            /// <summary>
            /// "СпортсменыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СпортсменыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СпортсменыL", typeof(IIS.PrilozhenieIspravl.Спортсмены));
                }
            }
        }
    }
}
