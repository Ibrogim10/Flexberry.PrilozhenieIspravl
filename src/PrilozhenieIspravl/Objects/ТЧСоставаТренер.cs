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
    /// Т ч состава тренер.
    /// </summary>
    // *** Start programmer edit section *** (ТЧСоставаТренер CustomAttributes)

    // *** End programmer edit section *** (ТЧСоставаТренер CustomAttributes)
    [AutoAltered()]
    [Caption("Т ч состава тренер")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧСоставаТренерE", new string[] {
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.ФИО as \'ФИО\'",
            "Сотрудники.Должность as \'Должность\'"}, Hidden=new string[] {
            "Сотрудники.ФИО"})]
    [MasterViewDefineAttribute("ТЧСоставаТренерE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    public class ТЧСоставаТренер : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.PrilozhenieIspravl.Сотрудники fСотрудники;
        
        private IIS.PrilozhenieIspravl.СоставКоманды fСоставКоманды;
        
        // *** Start programmer edit section *** (ТЧСоставаТренер CustomMembers)

        // *** End programmer edit section *** (ТЧСоставаТренер CustomMembers)

        
        /// <summary>
        /// Т ч состава тренер.
        /// </summary>
        // *** Start programmer edit section *** (ТЧСоставаТренер.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (ТЧСоставаТренер.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.PrilozhenieIspravl.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (ТЧСоставаТренер.Сотрудники Get start)

                // *** End programmer edit section *** (ТЧСоставаТренер.Сотрудники Get start)
                IIS.PrilozhenieIspravl.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (ТЧСоставаТренер.Сотрудники Get end)

                // *** End programmer edit section *** (ТЧСоставаТренер.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧСоставаТренер.Сотрудники Set start)

                // *** End programmer edit section *** (ТЧСоставаТренер.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (ТЧСоставаТренер.Сотрудники Set end)

                // *** End programmer edit section *** (ТЧСоставаТренер.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.PrilozhenieIspravl.СоставКоманды.
        /// </summary>
        // *** Start programmer edit section *** (ТЧСоставаТренер.СоставКоманды CustomAttributes)

        // *** End programmer edit section *** (ТЧСоставаТренер.СоставКоманды CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "СоставКоманды"})]
        public virtual IIS.PrilozhenieIspravl.СоставКоманды СоставКоманды
        {
            get
            {
                // *** Start programmer edit section *** (ТЧСоставаТренер.СоставКоманды Get start)

                // *** End programmer edit section *** (ТЧСоставаТренер.СоставКоманды Get start)
                IIS.PrilozhenieIspravl.СоставКоманды result = this.fСоставКоманды;
                // *** Start programmer edit section *** (ТЧСоставаТренер.СоставКоманды Get end)

                // *** End programmer edit section *** (ТЧСоставаТренер.СоставКоманды Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧСоставаТренер.СоставКоманды Set start)

                // *** End programmer edit section *** (ТЧСоставаТренер.СоставКоманды Set start)
                this.fСоставКоманды = value;
                // *** Start programmer edit section *** (ТЧСоставаТренер.СоставКоманды Set end)

                // *** End programmer edit section *** (ТЧСоставаТренер.СоставКоманды Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧСоставаТренерE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧСоставаТренерE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧСоставаТренерE", typeof(IIS.PrilozhenieIspravl.ТЧСоставаТренер));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧСоставаТренер.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧСоставаТренер CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧСоставаТренер CustomAttributes)
    public class DetailArrayOfТЧСоставаТренер : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.PrilozhenieIspravl.DetailArrayOfТЧСоставаТренер members)

        // *** End programmer edit section *** (IIS.PrilozhenieIspravl.DetailArrayOfТЧСоставаТренер members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧСоставаТренер by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧСоставаТренер.
        /// </summary>
        public DetailArrayOfТЧСоставаТренер(IIS.PrilozhenieIspravl.СоставКоманды fСоставКоманды) : 
                base(typeof(ТЧСоставаТренер), ((ICSSoft.STORMNET.DataObject)(fСоставКоманды)))
        {
        }
        
        public IIS.PrilozhenieIspravl.ТЧСоставаТренер this[int index]
        {
            get
            {
                return ((IIS.PrilozhenieIspravl.ТЧСоставаТренер)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.PrilozhenieIspravl.ТЧСоставаТренер dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
