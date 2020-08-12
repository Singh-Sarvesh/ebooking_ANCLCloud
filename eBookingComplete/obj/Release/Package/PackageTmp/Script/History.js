var agencyidvalue = 0;
function AutoFilBookinkMyLog(appRoot) {
    $("#AgencyName").autocomplete({
        source: function (request, response) {
            var parametername = $("#AgencyName").attr("parameter");
            var paramValue = $("#AgencyName").val();
            if (paramValue == null)
                paramValue = 0;
            var url = appRoot + "BookingApproval/GetTableData";
            var param = {};
            param.ApiName = "/FillAgencyMyLog";
            param.Parametername = parametername;
            param.ParamValueStr = paramValue;
            param.UserId = userid;
            param.IsClassified = 0;
            var result = getresult(url, param);
            result = jQuery.parseJSON(result);
            if ($('#hdnIsClassified').val() == "0") {
                response($.map(result, function (item, aa) {
                    return {
                        value: item.Value,
                        key: item.ID,

                    };
                }));
            }
            else {
                response($.map(result, function (item, aa) {
                    return {
                        value: item.Value,
                        key: item.ID,

                    };
                }));
            }
        },

        minLength: 1,
        select: function (event, ui) {
            $('#AgencyId').val(ui.item.key);
            agencyidvalue = ui.item.key;


        },
    }).keyup(function (e) { if (e.keyCode !== 13 && e.keyCode !== 9 && !e.ctrlKey && e.keyCode !== 27) agencyidvalue = 0; });
    $('#AgencyName').click(function () {
        $(this).select();
    });
    $("#AgencyName").change(function () { if ($(this).val() === '') if (this.id === 'AgencyName') agencyidvalue = 0; });

    $("#ClientName").autocomplete({
        source: function (request, response) {
            var parametername = $("#ClientName").attr("parameter");
            var paramValue = $("#ClientName").val();
            if (paramValue == null)
                paramValue = 0;
            var url = appRoot + "BookingApproval/GetTableData";
            var param = {};
            param.ApiName = "/FillClientMyLog";
            param.Parametername = parametername;
            param.ParamValueStr = paramValue;
            param.UserId = userid;
            param.IsClassified = 0;
            var result = getresult(url, param);
            result = jQuery.parseJSON(result);
            if ($('#hdnIsClassified').val() == "0") {
                response($.map(result, function (item, aa) {
                    return {
                        value: item.Value,
                        key: item.ID,

                    };
                }));
            }
            else {
                response($.map(result, function (item, aa) {
                    return {
                        value: item.Value,
                        key: item.ID,

                    };
                }));
            }
        },

        minLength: 1,
        select: function (event, ui) {
            $('#ClientId').val(ui.item.key);


        },
    }).keyup(function (e) { if (e.keyCode !== 13 && e.keyCode !== 9 && !e.ctrlKey && e.keyCode !== 27) agencyidvalue = 0; });
    $('#ClientName').click(function () {
        $(this).select();
    });
    $("#ClientName").change(function () { if ($(this).val() === '') if (this.id === 'ClientName') agencyidvalue = 0; });
    $("#CanvassorName").autocomplete({
        source: function (request, response) {
            var parametername = $("#CanvassorName").attr("parameter");
            var paramValue = $("#CanvassorName").val();
            if (paramValue == null)
                paramValue = 0;
            var url = appRoot + "BookingApproval/GetTableData";
            var param = {};
            param.ApiName = "/FillCanvassorMyLog";
            param.Parametername = parametername;
            param.ParamValueStr = paramValue;
            param.UserId = userid;
            param.IsClassified = 0;
            var result = getresult(url, param);
            result = jQuery.parseJSON(result);
            if ($('#hdnIsClassified').val() == "0") {
                response($.map(result, function (item, aa) {
                    return {
                        value: item.Value,
                        key: item.ID,

                    };
                }));
            }
            else {
                response($.map(result, function (item, aa) {
                    return {
                        value: item.Value,
                        key: item.ID,

                    };
                }));
            }
        },

        minLength: 1,
        select: function (event, ui) {
            $('#CanvassorId').val(ui.item.key);


        },
    }).keyup(function (e) { if (e.keyCode !== 13 && e.keyCode !== 9 && !e.ctrlKey && e.keyCode !== 27) agencyidvalue = 0; });
    $('#CanvassorName').click(function () {
        $(this).select();
    });
    $("#CanvassorName").change(function () { if ($(this).val() === '') if (this.id === 'CanvassorName') agencyidvalue = 0; });
    $("#BookingExe").autocomplete({
        source: function (request, response) {
            var parametername = $("#BookingExe").attr("parameter");
            var paramValue = $("#BookingExe").val();
            if (paramValue == null)
                paramValue = 0;
            var url = appRoot + "BookingApproval/GetTableData";
            var param = {};
            param.ApiName = "/FillBookingExeMyLog";
            param.Parametername = parametername;
            param.ParamValueStr = paramValue;
            param.UserId = userid;
            param.IsClassified = 0;
            var result = getresult(url, param);
            result = jQuery.parseJSON(result);
            if ($('#hdnIsClassified').val() == "0") {
                response($.map(result, function (item, aa) {
                    return {
                        value: item.Value,
                        key: item.ID,

                    };
                }));
            }
            else {
                response($.map(result, function (item, aa) {
                    return {
                        value: item.Value,
                        key: item.ID,

                    };
                }));
            }
        },

        minLength: 1,
        select: function (event, ui) {
            $('#Bookingexeid').val(ui.item.key);


        },
    });
}

function GetFullBookingID() {
    var bookingid = $("#BookingID").val();
    if (bookingid != '' && (isNaN(parseInt(bookingid))) || (bookingid.toString().length > 6 && bookingid.toString().length < 10)) {
        alert('Invalid BookingID!');
        return false;
    }
    else if (bookingid.toString().length >= 1 && bookingid.toString().length <= 7) {
        var n = serverDate.getFullYear() - 1000;
        bookingid = parseInt(n) * 1000000 + parseInt(bookingid);
        $("#BookingID").val(bookingid);
    }
}

function GetFullRoid() {
    var roid = $("#Roid").val();
    if (roid != '' && (isNaN(parseInt(roid))) || (roid.toString().length > 6 && roid.toString().length < 10)) {
        alert('Invalid ROID!');
        return false;
    }
    else if (roid.toString().length >= 1 && roid.toString().length <= 7) {
        var n = serverDate.getFullYear();
        roid = parseInt(n) * 1000000 + parseInt(roid);
        $("#Roid").val(roid);
    }
}

function FillPackageDataMyLog() {
    var parametername = $("#Packegid").attr("parameter");
    var url = appRoot + "BookingApproval/GetTableData";
    var param = {};
    param.ApiName = "/FillPackageMyLog";
    param.Parametername = parametername;
    param.UserId = userid;
    param.IsClassified = 0;
    var result = getresult(url, param);
    result = jQuery.parseJSON(result);
    if (result.length > 0) {
        for (var i = 0; i < result.length; i++)
            $("#Packegid").append(new Option(result[i].Value, result[i].ID));

    }
}
function FillStatusDataMyLog() {
    var parametername = $("#StatusId").attr("parameter");
    var url = appRoot + "BookingApproval/GetTableData";
    var param = {};
    param.ApiName = "/FillStatusMyLog";
    param.Parametername = parametername;
    param.UserId = userid;
    param.IsClassified = 0;
    var result = getresult(url, param);
    result = jQuery.parseJSON(result);
    if (result.length > 0) {
        for (var i = 0; i < result.length; i++)
            $("#StatusId").append(new Option(result[i].Value, result[i].ID));
    }
}

function GetAllDataMyOrder() {
    if ($('#AgencyName').val().trim() == '') {
        $('#AgencyId').val('');

    }
    if ($('#ClientName').val().trim() == '') {
        $('#ClientId').val('');

    }
    if ($('#CanvassorName').val().trim() == '') {
        $('#CanvassorId').val('');

    }

    var bookingid = $("#BookingID").val();
    if (bookingid != '' && (isNaN(parseInt(bookingid))) || (bookingid.toString().length > 6 && bookingid.toString().length < 10)) {
        alert('Invalid BookingID!');
        return false;
    }
    else if (bookingid.toString().length >= 1 && bookingid.toString().length <= 7) {
        var n = serverDate.getFullYear() - 1000;
        bookingid = parseInt(n) * 1000000 + parseInt(bookingid);
        $("#BookingID").val(bookingid);
    }

    var roid = $("#Roid").val();
    if (roid != '' && (isNaN(parseInt(roid))) || (roid.toString().length > 6 && roid.toString().length < 10)) {
        alert('Invalid ROID!');
        return false;
    }
    else if (roid.toString().length >= 1 && roid.toString().length <= 7) {
        var n = serverDate.getFullYear();
        roid = parseInt(n) * 1000000 + parseInt(roid);
        $("#Roid").val(roid);
    }

    $('#MyLogDetails').empty();
    var IsClassified = 0;
    var param = $('#formid').serialize() + "&UserId=" + userid + "&IsClassified=" + IsClassified + "";
    var url = appRoot + "BookingApproval/GetMyLogDetails";
    var result = getresult(url, param);
    result = jQuery.parseJSON(result);
    var strxml = '';
    if (result.length > 0) {
        var IsClassified = $("input[name='IsClassified']:checked").val();
        if (IsClassified == 1) {
            var CltableHtml = MakeClassifiedDataTable(result);
            $('#MyLogDetails').append(CltableHtml);
        }
        else {
            var DstableHtml = MakeDisplayDataTable(result);
            $('#MyLogDetails').append(DstableHtml);
        }
        // $('#MyLogDetails').append(tableHtml);
        //for (var i = 0; i < result.length; i++) {

        //    strxml += '<tr style="color:black;">'
        //    + '<td>' + result[i].SNo + '</td><td>' + result[i].RoNumber + '</td><td></td><td>' + result[i].AgencyName + '</td><td>' + result[i].ClientName + '</td>'
        //    + '<td>' + result[i].ScheduleDate + '</td><td>' + result[i].packageName + '</td><td>' + result[i].Adsize + '</td>'
        //    + '<td>' + result[i].PremiaName + '</td><td>' + result[i].ColorName + '</td><td>' + result[i].Amount + '</td><td>' + result[i].Status + '</td><td>' + result[i].Resend + '</td>'
        //    + '<td>' + result[i].RejectionReason + '</td><td>' + result[i].RejectionNote + '</td>'

        //    + '<td>' + result[i].ROID + '</td><td>' + result[i].BookingDate + '</td><td>' + result[i].AdtypeName + '</td>'
        //    + '<td>' + result[i].Cat1 + '</td><td>' + result[i].Cat2 + '</td>'
        //    + '<td>' + result[i].Cat3 + '</td><td>' + result[i].Cat4 + '</td><td>' + result[i].BookingExecName + '</td><td></td>'
        //    + '<td>' + result[i].CanvassorName + '</td><td>' + result[i].AgencyExec + '</td>';
        //    $('#MyLogDetails').append(strxml);

        //}
    }
    return false;
}

function MakeClassifiedDataTable(data) {
    var row;
    var table = $("<table/>").addClass('tables');
    if (data.length > 1) {
        $.each(data, function (rowIndex, r) {
            if (r[9] == 'Rejected') {
                row = $("<tr/>").css('color', 'red');
            }
            else {
                row = $("<tr/>");
            }
            $.each(r, function (colIndex, c) {
                if (colIndex != 12) {
                    if (rowIndex > 0 && colIndex == 1) {
                        row.append('<td><a href="#" target="eBooking" role="button" onclick="return ROIDOpenBookingData(' + c + ')" id="lnkOpenBooking" style="color:#6b59ce !important;">' + c + '</a></td>');
                    }
                    else if (rowIndex > 0 && (colIndex == 0 || colIndex == 5)) {
                        row.append('<td><span class="spntitle10" title="' + c + '">' + c + '</span></td>');
                    }
                    else if (rowIndex > 0 && (colIndex == 2 || colIndex == 3 || colIndex == 13)) {
                        row.append('<td><span class="spntitle15" title="' + c + '">' + c + '</span></td>');
                    }
                    else if (rowIndex > 0 && colIndex == 4) {
                        row.append('<td><span class="spntitle10" title="' + r[12] + '">' + c + '</span></td>');
                    }
                    else if (rowIndex > 0 && colIndex == 10) {
                        if (c == 0 && r[8] != "Late") {
                            row.append('<td><div class="divresend"><input type="button" value="SEND" class="btnresend" onclick="return SendRo(' + r[1] + ')" /></div></td>');
                        }
                        else if (c == 3 && r[8] != "Late") {
                            row.append('<td><div class="divresend"><input type="button" value="RESEND" class="btnresend" onclick="return ResendRo(' + r[1] + ')" /></div></td>');
                        }
                        else {
                            row.append('<td><div class="divresend"></div></td>');
                        }
                    }
                    else {
                        row.append($("<t" + (rowIndex == 0 ? "h" : "d") + "/>").text(c));
                    }
                }
            });
            table.append(row);
        });
    }
    else {
        table = '<div class="error-box">Sorry !! No Record Found.</div>'
    }
    return table;
}

function MakeDisplayDataTable(data) {
    var row;
    var table = $("<table/>").addClass('tables');
    if (data.length > 1) {
        $.each(data, function (rowIndex, r) {
            if (r[11] == 'Rejected') {
                row = $("<tr/>").css('color', 'red');
            }
            else {
                row = $("<tr/>");
            }
            $.each(r, function (colIndex, c) {
                if (colIndex != 14) {
                    if (rowIndex > 0 && colIndex == 1) {
                        row.append('<td><a href="#" target="eBooking" role="button" onclick="return ROIDOpenBookingData(' + c + ')" id="lnkOpenBooking" style="color:#6b59ce !important;">' + c + '</a></td>');
                    }

                    else if (rowIndex > 0 && (colIndex == 0 || colIndex == 5)) {
                        row.append('<td><span class="spntitle10" title="' + c + '">' + c + '</span></td>');
                    }
                    else if (rowIndex > 0 && colIndex == 4) {
                        row.append('<td><span class="spntitle10" title="' + r[14] + '">' + c + '</span></td>');
                    }
                    else if (rowIndex > 0 && colIndex == 8) {
                        row.append('<td><span class="spncolor" title="' + c + '">' + c + '</span></td>');
                    }
                    else if (rowIndex > 0 && (colIndex == 2 || colIndex == 3 || colIndex == 7 || colIndex == 15)) {
                        row.append('<td><span class="spntitle15" title="' + c + '">' + c + '</span></td>');
                    }
                    else if (rowIndex > 0 && colIndex == 12) {
                        if (c == 0 && r[10] != "Late") {
                            row.append('<td><div class="divresend"><input type="button" value="SEND" class="btnresend" onclick="return SendRo(' + r[1] + ')" /></div></td>');
                        }
                        else if (c == 3 && r[10] != "Late") {
                            row.append('<td><div class="divresend"><input type="button" value="RESEND" class="btnresend" onclick="return ResendRo(' + r[1] + ')" /></div></td>');
                        }
                        else {
                            row.append('<td><div class="divresend"></div></td>');
                        }
                    }
                    else {
                        row.append($("<t" + (rowIndex == 0 ? "h" : "d") + "/>").text(c));
                    }
                }
            });
            table.append(row);
        });
    }
    else {
        table = '<div class="error-box">Sorry !! No Record Found.</div>'
    }
    return table;
}

function SendRo(roid) {
    if (confirm("Are you sure you want to send?")) {
        var url = appRoot + "BookingApproval/GetTableData";
        var param = {};
        param.ApiName = "/SendForScreening";
        param.ROID = roid;
        param.UserId = userid;
        param.IsClassified = $("input[name='IsClassified']:checked").val();
        var result = getresult(url, param);
        result = jQuery.parseJSON(result);
        if (result.IsValid == 1) {
            alert(result.ErrorMessage);
            $('#btnhistory').click();
            //GetAllDataMyOrder();
        }
        else {
            alert(result.ErrorMessage);
            return false;
        }
    }
    else {
        return false;
    }
}

function ResendRo(roid) {
    if (confirm("Are you sure you want to resend?")) {
        var url = appRoot + "BookingApproval/GetTableData";
        var param = {};
        param.ApiName = "/SendForScreening";
        param.ROID = roid;
        param.UserId = userid;
        param.IsClassified = $("input[name='IsClassified']:checked").val();
        var result = getresult(url, param);
        result = jQuery.parseJSON(result);
        if (result.IsValid == 1) {
            alert(result.ErrorMessage);
            $('#btnhistory').click();
        }
        else {
            alert(result.ErrorMessage);
            return false;
        }
    }
    else {
        return false;
    }
}

// 
function ROIDOpenBookingData(Roid) {
    var ebookingpath = appRoot + 'booking/welcome?id=' + userid + '&cid=' + centerid + '& roid=' + Roid;
    //  sessionStorage.setItem("ROID", "" + Roid + "");
    window.open(ebookingpath, 'eBooking');
    return false;
}



